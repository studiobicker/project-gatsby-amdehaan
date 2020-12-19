export const color = {
  dark: "#1D1D1D",
  light: "#FFFFFF",
  darkgrey: "#404040",
  lightgrey: "#CCD1D2",
  primary: "#cbd1d2",
}

export const font = {
  primary: "Roboto, sans-serif",
}

export const transition = {
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  easeInOut: "color 250ms ease-in-out",
}

const size = {
  mobile: "375px",
  tablet: "768px",
  desktop: "992px",
  wide: "1200px",
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  wide: `(min-width: ${size.wide})`,
}
