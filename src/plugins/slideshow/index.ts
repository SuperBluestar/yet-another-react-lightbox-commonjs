import { Callback, RenderFunction } from "../../types.js";
import { PLUGIN_SLIDESHOW } from "../../core/index.js";
import { Slideshow } from "./Slideshow.js";

declare module "../../types.js" {
    interface LightboxProps {
        /** Slideshow plugin settings */
        slideshow?: {
            /** Slideshow plugin ref */
            ref?: React.ForwardedRef<SlideshowRef>;
            /** if `true`, slideshow is turned on automatically when the lightbox opens */
            autoplay?: boolean;
            /** slideshow delay in milliseconds */
            delay?: number;
        };
    }

    interface Render {
        /** render custom Slideshow Play icon */
        iconSlideshowPlay?: RenderFunction;
        /** render custom Slideshow Pause icon */
        iconSlideshowPause?: RenderFunction;
        /** render custom Slideshow button */
        buttonSlideshow?: RenderFunction<SlideshowRef>;
    }

    // noinspection JSUnusedGlobalSymbols
    interface ToolbarButtonKeys {
        [PLUGIN_SLIDESHOW]: null;
    }

    /** Slideshow plugin ref */
    export interface SlideshowRef {
        /** current slideshow playback status */
        playing: boolean;
        /** if `true`, the slideshow playback is disabled */
        disabled: boolean;
        /** start the slideshow playback */
        play: Callback;
        /** pause the slideshow playback */
        pause: Callback;
    }
}

export default Slideshow;
