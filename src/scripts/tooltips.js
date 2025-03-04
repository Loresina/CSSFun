const tooltip = document.querySelector('#tooltip');
const tooltipAnchor = document.querySelector('#tooltip-anchor');

const showTooltip = () => {
  tooltip.showPopover();
}

const hideTooltip = () => {
  tooltip.hidePopover();
}

tooltipAnchor.addEventListener('mouseenter', showTooltip);
tooltipAnchor.addEventListener('focus', showTooltip);

tooltipAnchor.addEventListener('mouseleave', hideTooltip);
tooltipAnchor.addEventListener('blur', hideTooltip);

tooltipAnchor.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideTooltip();
  }
})