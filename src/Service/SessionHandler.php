<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\HttpFoundation\RequestStack;

class SessionHandler
{
    public function __construct(private RequestStack $requestStack)
    {
    }

    /**
     * Saves any value to the session under the given key.
     * If the value is an object, it will be serialized before saving.
     *
     * @param string $key   The session key
     * @param mixed  $value The value to save in the session
     */
    public function saveToSession(string $key, mixed $value): void
    {
        // If the value is an object, serialize it
        if (\is_object($value)) {
            $value = serialize($value);
        }
        // Save the (possibly serialized) value to the session
        $this->requestStack->getSession()->set($key, $value);
    }

    /**
     * Retrieves a value from the session by its key.
     * If the value was serialized, it will be unserialized.
     *
     * @param string $key     The session key
     * @param mixed  $default The default value if the key does not exist
     *
     * @return mixed|null The retrieved value or default if not found
     */
    public function getFromSession(string $key, mixed $default = null): mixed
    {
        $value = $this->requestStack->getSession()->get($key, $default);

        // If the value is a serialized object, unserialize it
        if (\is_string($value) && $this->isSerialized($value)) {
            return unserialize($value);
        }

        return $value;
    }

    /**
     * Removes a value from the session by its key.
     *
     * @param string $key The session key to remove
     */
    public function removeFromSession(string $key): void
    {
        $this->requestStack->getSession()->remove($key);
    }

    /**
     * Determines if a given string is serialized.
     *
     * @param string $data The string to check
     *
     * @return bool True if the data is serialized, false otherwise
     */
    private function isSerialized(string $data): bool
    {
        return false !== @unserialize($data) || 'b:0;' === $data;
    }
}
