const css = `
.bk-root {
  /*! nouislider - 14.6.0 - 6/27/2020 */
  /* Functional styling;
 * These styles are required for noUiSlider to function.
 * You don't need to change these rules to apply your design.
 */
  /* Wrapper for all connect elements.
 */
  /* Offset direction
 */
  /* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
  /* Slider size and handle placement;
 */
  /* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
  /* Handles and cursors;
 */
  /* Handle stripes;
 */
  /* Disabled state;
 */
  /* Base;
 *
 */
  /* Values;
 *
 */
  /* Markings;
 *
 */
  /* Horizontal layout;
 *
 */
  /* Vertical layout;
 *
 */
}
.bk-root .noUi-target,
.bk-root .noUi-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.bk-root .noUi-target {
  position: relative;
}
.bk-root .noUi-base,
.bk-root .noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
.bk-root .noUi-connects {
  overflow: hidden;
  z-index: 0;
}
.bk-root .noUi-connect,
.bk-root .noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}
.bk-root .noUi-connect {
  height: 100%;
  width: 100%;
}
.bk-root .noUi-origin {
  height: 10%;
  width: 10%;
}
.bk-root .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
  left: 0;
  right: auto;
}
.bk-root .noUi-vertical .noUi-origin {
  width: 0;
}
.bk-root .noUi-horizontal .noUi-origin {
  height: 0;
}
.bk-root .noUi-handle {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}
.bk-root .noUi-touch-area {
  height: 100%;
  width: 100%;
}
.bk-root .noUi-state-tap .noUi-connect,
.bk-root .noUi-state-tap .noUi-origin {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.bk-root .noUi-state-drag * {
  cursor: inherit !important;
}
.bk-root .noUi-horizontal {
  height: 18px;
}
.bk-root .noUi-horizontal .noUi-handle {
  width: 34px;
  height: 28px;
  right: -17px;
  top: -6px;
}
.bk-root .noUi-vertical {
  width: 18px;
}
.bk-root .noUi-vertical .noUi-handle {
  width: 28px;
  height: 34px;
  right: -6px;
  top: -17px;
}
.bk-root .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
  left: -17px;
  right: auto;
}
.bk-root .noUi-target {
  background: #FAFAFA;
  border-radius: 4px;
  border: 1px solid #D3D3D3;
  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;
}
.bk-root .noUi-connects {
  border-radius: 3px;
}
.bk-root .noUi-connect {
  background: #3FB8AF;
}
.bk-root .noUi-draggable {
  cursor: ew-resize;
}
.bk-root .noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}
.bk-root .noUi-handle {
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background: #FFF;
  cursor: default;
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;
}
.bk-root .noUi-active {
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;
}
.bk-root .noUi-handle:before,
.bk-root .noUi-handle:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #E8E7E6;
  left: 14px;
  top: 6px;
}
.bk-root .noUi-handle:after {
  left: 17px;
}
.bk-root .noUi-vertical .noUi-handle:before,
.bk-root .noUi-vertical .noUi-handle:after {
  width: 14px;
  height: 1px;
  left: 6px;
  top: 14px;
}
.bk-root .noUi-vertical .noUi-handle:after {
  top: 17px;
}
.bk-root [disabled] .noUi-connect {
  background: #B8B8B8;
}
.bk-root [disabled].noUi-target,
.bk-root [disabled].noUi-handle,
.bk-root [disabled] .noUi-handle {
  cursor: not-allowed;
}
.bk-root .noUi-pips,
.bk-root .noUi-pips * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.bk-root .noUi-pips {
  position: absolute;
  color: #999;
}
.bk-root .noUi-value {
  position: absolute;
  white-space: nowrap;
  text-align: center;
}
.bk-root .noUi-value-sub {
  color: #ccc;
  font-size: 10px;
}
.bk-root .noUi-marker {
  position: absolute;
  background: #CCC;
}
.bk-root .noUi-marker-sub {
  background: #AAA;
}
.bk-root .noUi-marker-large {
  background: #AAA;
}
.bk-root .noUi-pips-horizontal {
  padding: 10px 0;
  height: 80px;
  top: 100%;
  left: 0;
  width: 100%;
}
.bk-root .noUi-value-horizontal {
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}
.bk-root .noUi-rtl .noUi-value-horizontal {
  -webkit-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
}
.bk-root .noUi-marker-horizontal.noUi-marker {
  margin-left: -1px;
  width: 2px;
  height: 5px;
}
.bk-root .noUi-marker-horizontal.noUi-marker-sub {
  height: 10px;
}
.bk-root .noUi-marker-horizontal.noUi-marker-large {
  height: 15px;
}
.bk-root .noUi-pips-vertical {
  padding: 0 10px;
  height: 100%;
  top: 0;
  left: 100%;
}
.bk-root .noUi-value-vertical {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding-left: 25px;
}
.bk-root .noUi-rtl .noUi-value-vertical {
  -webkit-transform: translate(0, 50%);
  transform: translate(0, 50%);
}
.bk-root .noUi-marker-vertical.noUi-marker {
  width: 5px;
  height: 2px;
  margin-top: -1px;
}
.bk-root .noUi-marker-vertical.noUi-marker-sub {
  width: 10px;
}
.bk-root .noUi-marker-vertical.noUi-marker-large {
  width: 15px;
}
.bk-root .noUi-tooltip {
  display: block;
  position: absolute;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background: #fff;
  color: #000;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
}
.bk-root .noUi-horizontal .noUi-tooltip {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 120%;
}
.bk-root .noUi-vertical .noUi-tooltip {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  top: 50%;
  right: 120%;
}
.bk-root .noUi-horizontal .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  left: auto;
  bottom: 10px;
}
.bk-root .noUi-vertical .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(0, -18px);
  transform: translate(0, -18px);
  top: auto;
  right: 28px;
}
.bk-root .noUi-handle {
  cursor: grab;
  cursor: -webkit-grab;
}
.bk-root .noUi-handle.noUi-active {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}
.bk-root .noUi-handle:after,
.bk-root .noUi-handle:before {
  display: none;
}
.bk-root .noUi-tooltip {
  display: none;
  white-space: nowrap;
}
.bk-root .noUi-handle:hover .noUi-tooltip {
  display: block;
}
.bk-root .noUi-horizontal {
  width: 100%;
  height: 10px;
}
.bk-root .noUi-vertical {
  width: 10px;
  height: 100%;
}
.bk-root .noUi-horizontal .noUi-handle {
  width: 14px;
  height: 18px;
  right: -7px;
  top: -5px;
}
.bk-root .noUi-vertical .noUi-handle {
  width: 18px;
  height: 14px;
  right: -5px;
  top: -7px;
}
.bk-root .noUi-target.noUi-horizontal {
  margin: 5px 0px;
}
.bk-root .noUi-target.noUi-vertical {
  margin: 0px 5px;
}
`;
export default css;