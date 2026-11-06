window.__ModuleLoader__.load({
  id: '@local/furina-theme',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    /*
     * Furina palette (Genshin Impact's Furina de Fontaine):
     * - deepsea  #3d5a9c  her deep-blue tailcoat / justice blue
     * - aqua     #4fb3d9  her Hydro Vision cyan
     * - gold     #d4b86a  Fontaine court gold trim
     * Both palettes keep WCAG-legible text contrast on their surfaces.
     */
    const tokens = {
      // Surfaces
      '--dsw-alias-bg-base': { light: '#eef3fb', dark: '#0c1220' },
      '--dsw-alias-bg-layer-1': { light: '#f8fafd', dark: '#141c30' },
      '--dsw-alias-bg-layer-2': { light: '#e7eef8', dark: '#1a2540' },
      '--dsw-alias-bg-overlay': { light: '#ffffff', dark: '#1e2a47' },

      // Borders
      '--dsw-alias-border-l1': { light: '#d3ddec', dark: '#2a3858' },
      '--dsw-alias-border-l2': { light: '#b9c8e0', dark: '#3a4c74' },

      // Brand: Hydro blue
      '--dsw-alias-brand-primary': { light: '#3d6fc4', dark: '#5c9be0' },

      // Text
      '--dsw-alias-label-primary': { light: '#1c2b4a', dark: '#e9eef8' },
      '--dsw-alias-label-secondary': { light: '#5a6e94', dark: '#a5b4d0' },

      // States
      '--dsw-alias-state-error-primary': { light: '#c4455a', dark: '#e07083' },
      '--dsw-alias-state-idle-primary': { light: '#8b9cc0', dark: '#6d7fa3' },
      '--dsw-alias-state-success-primary': { light: '#2e9e7f', dark: '#43c2a0' },
      '--dsw-alias-state-warn-primary': { light: '#c09136', dark: '#d9b356' },

      // Sidebar column: a deeper water tone than the base
      '--dsw-specific-sidebar-fill': { light: '#e0e9f7', dark: '#101828' },
    };

    function Decoration() {
      return h('span', {
        'aria-hidden': true,
        title: 'Furina de Fontaine',
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'none',
          userSelect: 'none',
          padding: '0 2px',
          lineHeight: 1,
        },
      },
      // Hydro Vision: teardrop gem on a gold mount
      h('svg', {
        viewBox: '0 0 24 24',
        width: 16,
        height: 16,
        style: { display: 'block' },
      },
        h('path', {
          d: 'M12 1.5c3.2 4.6 6.8 8.4 6.8 12.6a6.8 6.8 0 1 1-13.6 0C5.2 9.9 8.8 6.1 12 1.5Z',
          fill: '#4fb3d9',
          stroke: '#d4b86a',
          strokeWidth: 1.6,
          strokeLinejoin: 'round',
        }),
        h('ellipse', {
          cx: 9.6, cy: 11.4, rx: 1.9, ry: 2.7,
          transform: 'rotate(-24 9.6 11.4)',
          fill: '#c8ecf8', opacity: 0.85,
        }),
      ),
      // Name in court gold
      h('span', {
        style: {
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          color: '#d4b86a',
        },
      }, 'Focalors'),
      );
    }

    return {
      inject: ['slots', 'theme'],
      apply(ctx) {
        // The runner pins the layer source to this package's id and keeps the
        // disposer on the fiber, so unloading the plugin restores the host theme.
        ctx.theme.overrideTokens('furina', tokens);
        ctx.slots.inject('conversation.composer.dock', () => ctx.slots.register({
          name: 'conversation.composer.dock',
          id: 'furina-theme',
          order: 5,
        }, Decoration));
      },
    };
  },
});
