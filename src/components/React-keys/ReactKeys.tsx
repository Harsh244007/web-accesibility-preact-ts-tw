import { memo } from "preact/compat";

const AriaTools = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">ARIA Tools (Roles and Aria-label)</h2>
      <div className="flex flex-col gap-3" tabIndex={0}>
        <p>
          ARIA (Accessible Rich Internet Applications) attributes and roles are used to enhance the accessibility of web content for users with disabilities. ARIA tools provide a way to improve the experience for screen reader users, keyboard users, and more.
        </p>
        <h3 className="text-lg font-semibold mb-2">Using the Alt Attribute for Images</h3>
        <p>
          One common example is the use of the <code>alt</code> attribute in images to provide alternative text.
        </p>
        <pre>
          {`
            <img src="image.jpg" alt="A beautiful landscape" />
          `}
        </pre>
        <p>
          In the example above, the <code>alt</code> attribute provides a concise description of the image's content, allowing screen readers to convey the information to visually impaired users.
        </p>
        <h3 className="text-lg font-semibold mb-2">Role and aria-label</h3>
        <p>
          ARIA roles and <code>aria-label</code> attribute can be used to provide additional context for elements that may not have descriptive text.
        </p>
        <pre>
          {`
            <button role="button" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          `}
        </pre>
        <p>
          In the example above, the <code>role="button"</code> and <code>aria-label="Close"</code> attributes are used to indicate that the button has the role of a button and provides the label "Close."
        </p>
        <p>
          ARIA tools, including landmarks, roles, and other attributes, help create a more inclusive and accessible user experience for all users.
        </p>
      </div>
    </>
  );
};

export default memo(AriaTools);
