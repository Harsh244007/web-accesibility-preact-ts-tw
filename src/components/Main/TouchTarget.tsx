import { memo } from "preact/compat";

const TouchTarget = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Touch Target</h2>
      <div className="flex flex-col gap-3" tabIndex={0}>
        <p>
          Designing for touch targets is crucial for users who interact with your app using touch devices such as smartphones and tablets. Touch targets should be large enough and well-spaced to prevent accidental taps.
        </p>
        <h3 className="text-lg font-semibold mb-2">Size and Spacing</h3>
        <p>
          Touch targets should have a minimum size of 48x48 CSS pixels. Add sufficient spacing between touch targets to prevent accidental taps on adjacent elements.
        </p>
        <pre>
          {`
            <button style="width: 48px; height: 48px;">Tap Me</button>
          `}
        </pre>
        <p>
          In the example above, the button has a minimum size of 48x48 pixels, making it easier to tap.
        </p>
        <p>
          Ensuring proper touch target sizing improves the overall usability and accessibility of your app.
        </p>
      </div>
    </>
  );
};

export default memo(TouchTarget);
