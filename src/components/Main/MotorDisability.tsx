import { memo } from "preact/compat";

const MotorDisability = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Motor Disability (Spoon Theory)</h2>
      <div className="flex flex-col gap-3">
        <p>
          Consider users who have motor disabilities that affect their ability to use traditional input methods such as a mouse or keyboard. The Spoon Theory is a metaphor that helps explain energy limitations for people with chronic illnesses.
        </p>
        <h3 className="text-lg font-semibold mb-2">The Spoon Theory</h3>
        <p>
          The Spoon Theory is often used to describe the limited energy or "spoons" a person with chronic illness has to spend on various tasks throughout the day. Design your application with this in mind by keeping interactions efficient and reducing unnecessary steps.
        </p>
        <p>
          Provide keyboard navigation options and ensure clickable elements are large enough to be easily tapped on touch devices.
        </p>
      </div>
    </>
  );
};

export default memo(MotorDisability);
