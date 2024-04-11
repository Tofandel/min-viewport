export default (minSize = 400) => {
    const orientation = window.screen.orientation;
    const unhook = window.removeEventListener;
    const hook = window.addEventListener;
    let initial = null;
    const listener = () => {
        // Prevent infinite resize loop
        unhook('resize', listener);
        const size = Math.min(window.innerWidth, window.screen.width)

        let vp = document.querySelector('meta[name=viewport]');
        if (!vp) {
            vp = document.createElement('meta');
            vp.setAttribute('name', 'viewport');
            vp.setAttribute('content', 'width=device-width,initial-scale=1');
            document.getElementsByTagName('head')[0].appendChild(vp);
        }

        if (size <= minSize) {
            const scale = size / minSize;
            initial = vp.getAttribute('content');
            vp.setAttribute('content', 'width=' + minSize + ',initial-scale=' + scale + ',minimum-scale=' + scale);
        } else if (initial) {
            vp.setAttribute('content', initial);
        }
        setTimeout(() => {
            hook('resize', listener);
        }, 10);
    };
    if (document.readyState === 'complete') {
        listener()
    } else {
        hook('load', listener);
    }
    hook('resize', listener);
    if (orientation) {
        orientation.addEventListener('change', listener);
    } else {
        hook('orientationchange', listener);
    }
}
