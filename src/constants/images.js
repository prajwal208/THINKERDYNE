// PCB / electronics themed images (Unsplash - free to use, relevant to PCB/tech)
// Replace with your own assets from public/images/ when ready.

const BASE = 'https://images.unsplash.com';

export const images = {
  // Hero backgrounds for service pages
  pcbDesign: `${BASE}/photo-1518770660439-4636190af475?w=1200`,
  pcbAnalysis: `${BASE}/photo-1625138846393-40e8daefd239?w=1200`,
  manufacturing: `${BASE}/photo-1581091226825-a6a2a5aee158?w=1200`,
  reverseEngineering: `${BASE}/photo-1558618666-fcd25c85cd64?w=1200`,
  about: `${BASE}/photo-1633356122544-f134324a6cee?w=1200`,
  // Home hero background
  heroBg: `${BASE}/photo-1504384308090-c894fdcc538d?w=1200`,
  // Section / card imagery
  circuitBoard: `${BASE}/photo-1518770660439-4636190af475?w=800`,
  electronics: `${BASE}/photo-1558618666-fcd25c85cd64?w=800`,
  lab: `${BASE}/photo-1504384308090-c894fdcc538d?w=800`,
  factory: `${BASE}/photo-1581091226825-a6a2a5aee158?w=800`,
  aboutSection: `${BASE}/photo-1625138846393-40e8daefd239?w=800`,
  techWorkspace: `${BASE}/photo-1497366216548-37526070297c?w=800`,
  chipCloseup: `${BASE}/photo-1518770660439-4636190af475?w=600`,
  assembly: `${BASE}/photo-1581092918484-8313a1cc8bd5?w=800`,
  // Section backgrounds (Thinkerdyne CDN)
  servicesBg:
    'https://cdn.prod.website-files.com/60cd9919964427f5bd537eb7/60cd99199644277bbc537ec7_Group%20211.png',
  whyBg:
    'https://cdn.prod.website-files.com/60cd9919964427f5bd537eb7/60cd9919964427a905537ec9_Group%20210.png',
};

// export const routes = {
//   home: '/',
//   about: '/about',
//   pcbDesign: '/pcb-design',
//   pcbAnalysis: '/pcb-analysis',
//   manufacturing: '/manufacturing',
//   reverseEngineering: '/reverse-engineering',
//   contact: '/#contact',
// };

export const routes = {
  home: '/',
  about: '/',
  pcbDesign: '/',
  pcbAnalysis: '/',
  manufacturing: '/',
  reverseEngineering: '/',
  contact: '/',
};

/** Core service slugs for navigation */
export const serviceRoutes = [
  { title: 'PCB Design', path: routes.pcbDesign },
  { title: 'PCB Analysis', path: routes.pcbAnalysis },
  { title: 'Manufacturing Service', path: routes.manufacturing },
  { title: 'Reverse Engineering', path: routes.reverseEngineering },
];
