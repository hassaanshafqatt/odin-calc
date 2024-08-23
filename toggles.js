// ENABLERS/DISABLERS

const enableOps = () => {
    ops.forEach((operator) => {
      operator.removeAttribute("disabled");
      operator.style.backgroundColor = "#EDE8F5";
    });
  };
  
  const disableOps = () => {
    ops.forEach((operator) => {
      operator.setAttribute("disabled", "true");
      operator.style.backgroundColor = "gray";
    });
  };
  
  const enableNums = () => {
    nums.forEach((number) => {
      number.removeAttribute("disabled");
      number.style.backgroundColor = "#EDE8F5";
    });
  };
  
  const disableNums = () => {
    nums.forEach((number) => {
      number.setAttribute("disabled", "true");
      number.style.backgroundColor = "gray";
    });
  };
  
  const disableRes = () => {
    result.setAttribute("disabled", "true");
    result.style.backgroundColor = "gray";
  };
  
  const enableRes = () => {
    result.removeAttribute("disabled");
    result.style.backgroundColor = "#EDE8F5";
  };
  
  const disablePeroid = () => {
    period.setAttribute("disabled", "true");
    period.style.backgroundColor = "gray";
    display.value = display.value + ".";
  };
  