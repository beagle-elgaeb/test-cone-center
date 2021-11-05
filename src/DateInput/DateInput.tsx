import { KeyboardEvent, useRef } from "react";
import styled from "styled-components/macro";
import { defaultConfig } from "./defaultConfig";
import {
  changeDateWithControl,
  Config,
  formatDate,
  getPositions,
} from "./utils";

function DateInput(props: Partial<Config>) {
  const config = { ...defaultConfig, ...props };

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

    const pos = getPositions(date, config);

    // ------------------------------- ДЕНЬ ---------------------------------------
    if (activeCursor <= pos.afterDay) {
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
      cursorEnd = pos.afterDay;
    }

    // ------------------------------- МЕСЯЦ --------------------------------------
    else if (
      activeCursor >= pos.beforeMonth &&
      activeCursor <= pos.afterMonth
    ) {
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

      const newPos = getPositions(date, config);

      cursorStart = newPos.beforeMonth;
      cursorEnd = newPos.afterMonth;
    }

    // ------------------------------- ГОД ----------------------------------------
    else if (activeCursor >= pos.beforeYear && activeCursor <= pos.afterDate) {
      date.setFullYear(date.getFullYear() + delta);

      cursorStart = pos.beforeYear;
      cursorEnd = pos.afterDate;
    }

    // ------------------------------- ЧАСЫ -----------------------------------
    else if (activeCursor >= pos.beforeTite && activeCursor <= pos.afterHours) {
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

      cursorStart = pos.beforeTite;
      cursorEnd = pos.afterHours;
    }

    // ------------------------------- МИНУТЫ ---------------------------------
    else if (
      activeCursor >= pos.beforeMinutes &&
      activeCursor <= pos.afterMinutes
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

      cursorStart = pos.beforeMinutes;
      cursorEnd = pos.afterMinutes;
    }

    // ------------------------------- СЕКУНДЫ --------------------------------
    else if (
      activeCursor >= pos.beforeSeconds &&
      activeCursor <= pos.afterSeconds
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

      cursorStart = pos.beforeSeconds;
      cursorEnd = pos.afterSeconds;
    } else {
      return;
    }

    input.value = formatDate(date, config);
    input.selectionEnd = cursorEnd;
    input.selectionStart = cursorStart;
  }

  const dateText = formatDate(ref.current, config);

  return <Input defaultValue={dateText} onKeyDown={onKeydown} autoFocus />;
}

export default DateInput;

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
