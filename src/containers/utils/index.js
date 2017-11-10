// Utils functions for use throughtout the app

export const getPanelTypeFromPath = path => (path === '/' ? 'default' : path.replace(/^\/+/g, ''));

export const getCelciusFromKelvin = kelvin => (kelvin - 273.15).toFixed(2);
