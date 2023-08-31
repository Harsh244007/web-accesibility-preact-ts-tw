import { lazy } from "preact/compat";
const AriaTools = lazy(() => import("./React-keys/ReactKeys"));
const ColorContrast = lazy(
  () => import("./Main/ColorContrast")
);
const SemanticHtml = lazy(
  () => import("./Main/AuditoryThings")
);
const AuditoryThings = lazy(
  () => import("./Main/SemanticHtml")
);
const MotorDisability = lazy(
  () => import("./Main/MotorDisability")
);
const TouchTarget = lazy(
  () => import("./Main/TouchTarget")
);
const KeyboardNavigation = lazy(
  () => import("./Main/KeyboardNavigation ")
);
const ResponsiveDesign = lazy(
  () => import("./Main/ResponsiveDesign ")
);
const Home = lazy(() => import("./Home"));
import Navbar from "./Navbar/Navbar";
import Loading from "./Common/Loading";
export {
  AriaTools,
  Loading,
  ColorContrast,
  Navbar,
  SemanticHtml,
  AuditoryThings,
  KeyboardNavigation,
  MotorDisability,
  ResponsiveDesign,
  TouchTarget,
  Home,
};
