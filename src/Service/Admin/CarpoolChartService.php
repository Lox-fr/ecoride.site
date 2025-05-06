<?php

declare(strict_types=1);

namespace App\Service\Admin;

use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class CarpoolChartService
{
    public function __construct(
        private CarpoolStatsService $carpoolStatsService,
        private ChartBuilderInterface $chartBuilder,
    ) {
    }

    public function createCarpoolChart(): Chart
    {
        // Retrieving statistics data
        $statsData = $this->carpoolStatsService->getCarpoolStatsForChart();

        // Extracting dates and values
        $dates = array_map(fn ($d) => \sprintf('%02d/%02d/%d', $d['_id']['day'], $d['_id']['month'], $d['_id']['year']), $statsData);
        $carpoolCounts = array_map(fn ($d) => $d['carpool_count'], $statsData);
        $creditsEarned = array_map(fn ($d) => $d['credits_earned'], $statsData);

        // Creating the chart
        $chart = $this->chartBuilder->createChart(Chart::TYPE_BAR);
        $chart->setData([
            'labels' => $dates,
            'datasets' => [
                [
                    'type' => 'bar',
                    'label' => 'Nombre de covoiturages',
                    'data' => $carpoolCounts,
                    'backgroundColor' => 'rgba(67, 122, 73, 0.6)',
                    'borderColor' => 'rgba(67, 122, 73, 1)',
                    'borderWidth' => 1,
                    'yAxisID' => 'y',
                ],
                [
                    'type' => 'line',
                    'label' => 'Crédits gagnés',
                    'data' => $creditsEarned,
                    'borderColor' => 'rgb(182, 38, 38)',
                    'backgroundColor' => 'rgba(182, 38, 38, 0.6)',
                    'borderWidth' => 2,
                    'pointRadius' => 3,
                    'fill' => false,
                    'yAxisID' => 'y1',
                    'tension' => 0.4,
                ],
            ],
        ]);

        // $maxValue = max(max($carpoolCounts), max($creditsEarned));

        // Enabling zoom and pan
        $chart->setOptions([
            'responsive' => true,
            'maintainAspectRatio' => false,
            'scales' => [
                'y' => [
                    'type' => 'linear',
                    'display' => true,
                    'position' => 'left',
                    'title' => ['display' => true, 'text' => 'Covoiturages'],
                    // 'suggestedMax' => $maxValue,
                ],
                'y1' => [
                    'type' => 'linear',
                    'display' => true,
                    'position' => 'right',
                    'title' => ['display' => true, 'text' => 'Crédits'],
                    'grid' => ['drawOnChartArea' => false],
                    // 'suggestedMax' => $maxValue,
                ],
            ],
            'plugins' => [
                'zoom' => [
                    'pan' => [
                        'enabled' => true,
                        'mode' => 'x',
                    ],
                    'zoom' => [
                        'wheel' => ['enabled' => true],
                        'pinch' => ['enabled' => true],
                        'mode' => 'x',
                    ],
                ],
            ],
        ]);

        return $chart;
    }
}
