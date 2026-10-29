/**
 * Safe fallback for the missing XDMovies protector implementation.
 * Preserve the original URL rather than failing the entire addon at startup.
 * Protected XDMovies links may not resolve until the upstream implementation is restored.
 */
export async function resolveXDMoviesProtectedUrl(url, _options = {}) {
    return url;
}
