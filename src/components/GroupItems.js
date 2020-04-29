import React from "react";
import { ThemeConsumer, Pane, Text } from "evergreen-ui";

const styles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridColumnGap: 16,
  gridRowGap: 16,
  marginTop: 40,
};

const GroupItems = () => {
  return (
    <>
      <ThemeConsumer>
        {(theme) => (
          <Pane clearfix>
            <Pane style={styles}>
              {Object.keys(theme.colors.background)
                .filter((x) =>
                  ["tint2", "overlay"].every((element) => element !== x)
                )
                .map((background) => (
                  <Pane
                    key={background}
                    background={background}
                    float="left"
                    width="100%"
                    height={120}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="default">{background}</Text>
                  </Pane>
                ))}
            </Pane>
          </Pane>
        )}
      </ThemeConsumer>
    </>
  );
};

export default GroupItems;
