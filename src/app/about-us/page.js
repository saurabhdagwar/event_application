import React from "react";

const Aboutus = () => {
  return (
    <div className="h-[480px]  flex flex-col items-center ">
      <h2 className="font-bold">About Event App</h2>
      <p className="w-[80%] m-[10px]">
        An event can be made of two parts, the event header and the event body.
        The event header might include information such as event name, time
        stamp for the event, and type of event. The event body provides the
        details of the state change detected. An event body should not be
        confused with the pattern or the logic that may be applied in reaction
        to the occurrence of the event itself.
      </p>
      <p className="w-[80%] m-[10px]">
        The event processing engine is the logical layer responsible for
        identifying an event, and then selecting and executing the appropriate
        reaction. It can also trigger a number of assertions. For example, if
        the event that comes into the event processing engine is a product ID
        low in stock, this may trigger reactions such as “Order product ID” and
        “Notify personnel”.
      </p>
    </div>
  );
};

export default Aboutus;
