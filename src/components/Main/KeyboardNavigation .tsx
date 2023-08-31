import { memo } from "preact/compat";

const KeyboardNavigation = () => {
  const handleEnterKeyPress = (event: any) => {
      window.alert(`${event.key} Key is pressed`);
    };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Keyboard Navigation (tabIndex)
      </h2>
      <div className="flex flex-col gap-3" onKeyPress={handleEnterKeyPress}  tabIndex={0}>
        <p>
          Keyboard navigation is essential for users who rely on keyboard input
          or have motor disabilities. Use the <code>tabIndex</code> attribute to
          manage the keyboard navigation order and focusable elements.
        </p>
        <h3 className="text-lg font-semibold mb-2">Using tabIndex</h3>
        <p>
          Add <code>tabIndex="0"</code> to make an element focusable using the
          keyboard's <kbd>Tab</kbd> key. A positive <code>tabIndex</code> value
          indicates the order of focus navigation, while <code>-1</code> makes
          an element programmatically focusable but not part of the natural tab
          order.
        </p>
        <pre>
          {`
            <input type="text" tabIndex="0" />
            <button tabIndex="1">Submit</button>
            <a href="#" tabIndex="2">Link</a>
          `}
        </pre>
        <p>
          In the example above, the input is the first focusable element,
          followed by the button and link.
        </p>
        <h3 className="text-lg font-semibold mb-2">
          Handling Enter and Shift Key Press
        </h3>
        <p>
          Use the <code>onKeyPress</code> event to handle specific key presses
          like Enter or Shift.
        </p>
        <pre>
          {`
            <input type="text" onKeyPress={handleEnterKeyPress} />
            <button tabIndex="1" onKeyPress={handleShiftKeyPress}>Submit</button>
          `}
        </pre>
        <p>
          In the example above, the <code>handleEnterKeyPress</code> function is
          called when Enter key is pressed on the input, and{" "}
          <code>handleShiftKeyPress</code> function is called when Shift key is
          pressed on the button.
        </p>
        <p>
          Proper keyboard navigation enhances accessibility and ensures all
          users can navigate your app easily.
        </p>
      </div>
    </>
  );
};

export default memo(KeyboardNavigation);
