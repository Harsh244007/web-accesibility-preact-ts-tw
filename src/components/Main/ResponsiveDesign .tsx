import { memo } from "preact/compat";

const ResponsiveDesign = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Responsive Design</h2>
      <div className="flex flex-col gap-3">
        <p>
          Responsive design ensures your web app works well on various devices and screen sizes, providing a consistent experience for all users.
        </p>
        <h3 className="text-lg font-semibold mb-2">Viewport Meta Tag</h3>
        <p>
          Use the viewport meta tag to control how your app is displayed on different devices. Set the initial scale to 1 and width to device width.
        </p>
        <pre>
          {`
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          `}
        </pre>
        <p>
          In the example above, the viewport meta tag ensures proper scaling on different devices.
        </p>
        <h3 className="text-lg font-semibold mb-2">CSS Media Queries</h3>
        <p>
          Utilize CSS media queries to apply styles based on the screen size. For example, adjusting font size for smaller screens:
        </p>
        <pre>
          {`
            @media screen and (max-width: 768px) {
              body {
                font-size: 14px;
              }
            }
          `}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Flex Layout</h3>
        <p>
          Flexbox is a powerful layout tool for building flexible and responsive layouts:
        </p>
        <pre>
          {`
            .flex-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          `}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Flex Wrap</h3>
        <p>
          Flex-wrap allows items to wrap to the next line when there's not enough space:
        </p>
        <pre>
          {`
            .flex-container {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        </pre>
        <h3 className="text-lg font-semibold mb-2">Grid Layout</h3>
        <p>
          CSS Grid offers a powerful two-dimensional layout system:
        </p>
        <pre>
          {`
            .grid-container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 16px;
            }
          `}
        </pre>
        <h3 className="text-lg font-semibold mb-2">CSS @supports</h3>
        <p>
          Use @supports to apply styles based on browser support for specific features:
        </p>
        <pre>
          {`
            @supports (display: grid) {
              .grid-container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
              }
            }
          `}
        </pre>
      </div>
    </>
  );
};

export default memo(ResponsiveDesign);
