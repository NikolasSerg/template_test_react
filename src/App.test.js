// import shallow from "enzyme/build/shallow";
import React from "react";
import App from './App';


test("should content 1 h1", () => {
    const component = shallow(<App />);
    const post = component.find(".hi");
    expect(post.length).toBe(1);
    console.log(component.debug());
})