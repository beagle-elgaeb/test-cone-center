import { KeyboardEvent, useRef } from "react";
import styled from "styled-components/macro";
import { changeDateWithControl, formatDate, getMonth } from "./utils";

function App() {
  const ref = useRef(new Date());

  function onKeydown(evt: KeyboardEvent<HTMLInputElement>) {
    const date = ref.current;

    const input = evt.currentTarget;
    const prevDate = new Date(date);

    let cursor = input.selectionStart;
    let delta;

    if (cursor === null) {
      return;
    }

    if (evt.key === "ArrowUp") {
      delta = 1;
    } else if (evt.key === "ArrowDown") {
      delta = -1;
    } else {
      return;
    }

    const ignoreBorders = evt.ctrlKey;

    evt.preventDefault();

    if (cursor <= 2) {
      date.setDate(date.getDate() + delta);

      if (!ignoreBorders) {
        changeDateWithControl(
          date,
          prevDate,
          Date.prototype.getMonth,
          Date.prototype.setMonth,
          Date.prototype.setDate,
          0
        );
      }

      cursor = 2;
    }

    if (cursor >= 3 && cursor <= 3 + getMonth(date).length) {
      date.setMonth(date.getMonth() + delta);

      if (!ignoreBorders) {
        changeDateWithControl(
          date,
          prevDate,
          Date.prototype.getFullYear,
          Date.prototype.setFullYear,
          Date.prototype.setMonth,
          -1
        );
      }

      cursor = 3 + getMonth(date).length;
    }

    if (
      cursor >= 4 + getMonth(date).length &&
      cursor <= 8 + getMonth(date).length
    ) {
      date.setFullYear(date.getFullYear() + delta);

      cursor = 8 + getMonth(date).length;
    }

    if (
      cursor >= 9 + getMonth(date).length &&
      cursor <= 11 + getMonth(date).length
    ) {
      date.setHours(date.getHours() + delta);

      if (!ignoreBorders) {
        changeDateWithControl(
          date,
          prevDate,
          Date.prototype.getDate,
          Date.prototype.setDate,
          Date.prototype.setHours,
          -1
        );
      }

      cursor = 11 + getMonth(date).length;
    }

    if (
      cursor >= 12 + getMonth(date).length &&
      cursor <= 14 + getMonth(date).length
    ) {
      date.setMinutes(date.getMinutes() + delta);

      if (!ignoreBorders) {
        changeDateWithControl(
          date,
          prevDate,
          Date.prototype.getHours,
          Date.prototype.setHours,
          Date.prototype.setMinutes,
          -1
        );
      }

      cursor = 14 + getMonth(date).length;
    }

    if (
      cursor >= 15 + getMonth(date).length &&
      cursor <= 17 + getMonth(date).length
    ) {
      date.setSeconds(date.getSeconds() + delta);

      if (!ignoreBorders) {
        changeDateWithControl(
          date,
          prevDate,
          Date.prototype.getMinutes,
          Date.prototype.setMinutes,
          Date.prototype.setSeconds,
          -1
        );
      }

      cursor = 17 + getMonth(date).length;
    }

    input.value = formatDate(date);
    input.selectionEnd = cursor;
  }

  const dateText = formatDate(ref.current);

  return (
    <Container>
      <Input defaultValue={dateText} onKeyDown={onKeydown} autoFocus />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const Input = styled.input`
  width: 250px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 6px;
  outline: none;
  box-shadow: inset 0 0 3px 1px lightgray;
  font-size: 16px;
  line-height: 30px;
  margin: 50px 0 0 50px;
  padding: 0 10px 0 10px;
`;
