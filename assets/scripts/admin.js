import zoomPlugin from 'chartjs-plugin-zoom';

document.addEventListener('chartjs:init', function (event) {
    const Chart = event.detail.Chart;
    Chart.register(zoomPlugin);
});
