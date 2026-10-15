// Universal asset URL resolver for GitHub Pages and production builds
export const resolveAsset = (path: string): string => {
  if (!path) return '';
  
  // Return absolute external URLs as-is
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  // Normalize path: strip leading slashes and any legacy 'src/' or './'
  let normalized = path.replace(/^\.?\/+/, '');
  if (normalized.startsWith('src/')) {
    normalized = normalized.replace(/^src\//, '');
  }

  // Ensure path starts with assets/
  if (!normalized.startsWith('assets/')) {
    normalized = `assets/${normalized}`;
  }

  // Use Vite BASE_URL (relative './' or repo base)
  const base = import.meta.env.BASE_URL || './';
  const prefix = base.endsWith('/') ? base : `${base}/`;

  return `${prefix}${normalized}`;
};
