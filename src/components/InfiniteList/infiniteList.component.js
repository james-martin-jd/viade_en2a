import React from "react";
import { ListWrapper, ListItemWrapper } from "./infiniteList.style";
import Infinite from "react-infinite";
import Button from "react-bootstrap/Button";
import { Base64 } from "js-base64";

type Props = {
  webId: String,
  elements: [],
  isInfiniteLoading: Boolean,
  buildElements: () => void,
  handleInfiniteLoad: () => void,
  elementInfiniteLoad: () => void
};

export const InfiniteList = (props: Props) => {
  const {
    elements,
    isInfiniteLoading,
    handleInfiniteLoad,
    elementInfiniteLoad
  } = props;

  return (
    <ListWrapper>
      <Infinite
        elementHeight={200}
        useWindowAsScrollContainer={true}
        infiniteLoadBeginEdgeOffset={200}
        onInfiniteLoad={handleInfiniteLoad}
        loadingSpinnerDelegate={elementInfiniteLoad}
        isInfiniteLoading={isInfiniteLoading}
      >
        {elements.map(element => (
          <ListItemWrapper>
            <Button
              {...{ href: "/map/" + Base64.encode(element.props.url) }}
              style={{ height: 190 }}
              variant="outline-primary"
              block
            >
              {element}
            </Button>
          </ListItemWrapper>
        ))}
      </Infinite>
    </ListWrapper>
  );
};
