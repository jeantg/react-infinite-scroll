import InfiniteScroll from "../../../src/InfiniteScroll/index";
import { mount } from "@cypress/react";

it("Call onLoad is correct viewPort 100 100", () => {
  cy.viewport(100, 100);
  const onLoad = cy.spy();
  function called(x: number, y: number) {
    cy.get(".infinite").scrollTo(x, y);
    cy.wait(1500).then(() => {
      expect(onLoad).to.called;
    });
  }
  const Component = () => {
    return (
      <InfiniteScroll onLoad={onLoad} variant="infinite">
        <div>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
          <div>Item 6</div>
          <div>Item 7</div>
          <div>Item 8</div>
          <div>Item 9</div>
          <div>Item 10</div>
          <div>Item 11</div>
        </div>
      </InfiniteScroll>
    );
  };
  mount(<Component />);
  called(0, 100);
  called(-1, -1);
});
