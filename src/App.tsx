import { KeyboardEvent, useRef } from "react";
import styled from "styled-components/macro";
import { changeDateWithControl, formatDate, getMonth } from "./utils";

function App() {
  const ref = useRef(new Date());

  function onKeydown(evt: KeyboardEvent<HTMLInputElement>) {
    const date = ref.current;

    const input = evt.currentTarget;
    const prevDate = new Date(date);

    let cursorStart;
    let cursorEnd;

    const activeCursor =
      input.selectionDirection === "forward"
        ? input.selectionEnd
        : input.selectionStart;

    let delta;

    if (activeCursor === null) {
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

    // ------------------------------- ДЕНЬ ---------------------------------------
    if (activeCursor <= 2) {
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

      cursorStart = 0;
      cursorEnd = 2;
    }

    // ------------------------------- МЕСЯЦ --------------------------------------
    else if (activeCursor >= 3 && activeCursor <= 3 + getMonth(date).length) {
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

      cursorStart = 3;
      cursorEnd = 3 + getMonth(date).length;
    }

    // ------------------------------- ГОД ----------------------------------------
    else if (
      activeCursor >= 4 + getMonth(date).length &&
      activeCursor <= 8 + getMonth(date).length
    ) {
      date.setFullYear(date.getFullYear() + delta);

      cursorStart = 4 + getMonth(date).length;
      cursorEnd = 8 + getMonth(date).length;
    }

    // ------------------------------- ЧАСЫ -----------------------------------
    else if (
      activeCursor >= 9 + getMonth(date).length &&
      activeCursor <= 11 + getMonth(date).length
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

      cursorStart = 9 + getMonth(date).length;
      cursorEnd = 11 + getMonth(date).length;
    }

    // ------------------------------- МИНУТЫ ---------------------------------
    else if (
      activeCursor >= 12 + getMonth(date).length &&
      activeCursor <= 14 + getMonth(date).length
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

      cursorStart = 12 + getMonth(date).length;
      cursorEnd = 14 + getMonth(date).length;
    }

    // ------------------------------- СЕКУНДЫ --------------------------------
    else if (
      activeCursor >= 15 + getMonth(date).length &&
      activeCursor <= 17 + getMonth(date).length
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

      cursorStart = 15 + getMonth(date).length;
      cursorEnd = 17 + getMonth(date).length;
    } else {
      return;
    }

    input.value = formatDate(date);
    input.selectionEnd = cursorEnd;
    input.selectionStart = cursorStart;
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
  height: 100vh;
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
  margin: 0;
  padding: 0 10px 0 10px;
`;
