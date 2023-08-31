import { memo } from "preact/compat";

const SemanticHtml = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Semantic HTML (Landmarks, Focus Management)</h2>
      <div className="flex flex-col gap-3" tabIndex={0}>
        <p>
          Using semantic HTML elements helps improve the structure and accessibility of your web content. Semantic elements provide meaning to assistive technologies and aid in navigation.
        </p>
        <h3 className="text-lg font-semibold mb-2">Landmark Roles</h3>
        <p>
          Landmark roles define sections of your page, making it easier for screen readers and users to navigate through content.
        </p>
        <pre>
          {`
            <header role="banner">
              <!-- Your site header content -->
            </header>
            <nav role="navigation">
              <!-- Navigation menu or links -->
            </nav>
            <main role="main">
              <!-- Main content of your page -->
            </main>
            <footer role="contentinfo">
              <!-- Footer content -->
            </footer>
          `}
        </pre>
        <p>
          In the example above, we've used ARIA roles like <code>banner</code>, <code>navigation</code>, <code>main</code>, and <code>contentinfo</code> to mark different sections of the page.
        </p>
        <h3 className="text-lg font-semibold mb-2">Focus Management</h3>
        <p>
          Proper focus management ensures keyboard users can navigate through your site effectively. Use the <code>tabindex</code> attribute and JavaScript sparingly to control focus order.
        </p>
        <pre>
          {`
            <button tabindex="0">Focusable Button</button>
          `}
        </pre>
        <p>
          The <code>tabindex</code> attribute controls the order in which elements receive keyboard focus. Be cautious when using a custom focus order, as it may disrupt natural navigation.
        </p>
        <p>
          When implementing interactive elements like modal dialogs, manage focus to prevent users from getting stuck outside the modal. Shift focus back to the modal when it's open and return it to the triggering element when closed.
        </p>
        <p>
          By using semantic HTML elements and managing focus appropriately, you create a more accessible and user-friendly experience for all visitors.
        </p>
      </div>
    </>
  );
};

export default memo(SemanticHtml);
