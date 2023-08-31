import { memo } from "preact/compat";

const ColorContrast = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Color Contrast (Dark Mode etc.)</h2>
      <div className="flex flex-col gap-3">
        <p>
          Ensuring proper color contrast is essential for users with visual impairments. This includes providing enough contrast between text and background colors to make content readable.
        </p>
        <h3 className="text-lg font-semibold mb-2">Using Sufficient Contrast</h3>
        <p>
          For text to be easily readable, a contrast ratio of at least 4.5:1 is recommended for normal text and 3:1 for large text.
        </p>
        <pre>
          {`
            <p style="color: #ffffff; background-color: #333333;">
              This is an example text with sufficient contrast.
            </p>
          `}
        </pre>
        <p>
          In the example above, the text color and background color have a high enough contrast ratio to ensure readability.
        </p>
        <h3 className="text-lg font-semibold mb-2">Implementing Dark Mode</h3>
        <p>
          Dark mode is a popular feature that reduces eye strain in low-light environments. It involves switching the color scheme to a darker palette.
        </p>
        <pre>
          {`
            body.dark-mode {
              background-color: #333333;
              color: #ffffff;
            }
          `}
        </pre>
        <p>
          By adding a CSS class such as <code>dark-mode</code> to the <code>body</code> element, you can apply the dark mode styles to the entire page.
        </p>
        <p>
          Color contrast considerations extend beyond text and background colors to other visual elements, ensuring that all users can perceive and interact with content effectively.
        </p>
      </div>
    </>
  );
};

export default memo(ColorContrast);
