import { render } from "preact";
import { useState } from "preact/hooks";
import { Suspense } from "preact/compat";
import {
  AriaTools,
  ColorContrast,
  SemanticHtml,
  AuditoryThings,
  MotorDisability,
  TouchTarget,
  Home,
  KeyboardNavigation,
  ResponsiveDesign,
  Navbar,
  Loading,
} from "./components";
import "./index.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 2:
        return <AriaTools />;
      case 3:
        return <ColorContrast />;
      case 4:
        return <AuditoryThings />;
      case 5:
        return <SemanticHtml />;
      case 6:
        return <MotorDisability />;
      case 7:
        return <TouchTarget />;
      case 8:
        return <KeyboardNavigation />;
      case 9:
        return <ResponsiveDesign />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-5">
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="py-4 w-auto overflow-auto px-6 max-w-3xl m-auto">
        <Suspense fallback={<Loading />}>{renderActiveComponent()}</Suspense>
      </div>
      <p>Made by Harsh with ❤️</p>
    </div>
  );
};
render(<App />, document.body);
