function gel(id) {
  return document.getElementById(id);
}

function gelc(classname) {
  return document.getElementsByClassName(classname);
}

function crel(type) {
  return document.createElement(type);
}

function doc(container, element) {
  container.appendChild(element);
}

function opac(e) {
  e.style.display = 'flex';
  e.style.opacity = '1';
}

function trans(e) {
  e.style.opacity = '0';
  setTimeout(() => { e.style.display = 'none'; }, 600);
}

function hideView(backView) {
  trans(backView);
  setTimeout(() => { backView.remove(); }, 200);
}

function appAlert(title, text) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    if (e.keyCode === 27) {
      hideView(backView);
    }
  });

  const alertPanel = crel('div');
  alertPanel.className = 'alertPanel';

  const alertTitle = crel('div');
  alertTitle.className = 'alertTitle';
  alertTitle.textContent = title;

  const alertText = crel('div');
  alertText.className = 'alertText';
  alertText.textContent = text;

  const okAlertButton = crel('div');
  okAlertButton.className = 'okAlertButton';
  okAlertButton.textContent = 'OK';
  okAlertButton.addEventListener('click', () => {
    hideView(backView);
  });

  doc(alertPanel, alertTitle);
  doc(alertPanel, alertText);
  doc(alertPanel, okAlertButton);
  doc(backView, alertPanel);
  opac(backView);
}

function appConfirm(callBack, args, title, text) {
  const backView = crel('div');
  backView.className = 'backView';
  doc(document.body, backView);
  backView.setAttribute('tabindex', '0');
  backView.addEventListener('keypress', e => {
    if (e.keyCode === 27) {
      hideView(backView);
    }
  });

  const alertPanel = crel('div');
  alertPanel.className = 'alertPanel';

  const alertTitle = crel('div');
  alertTitle.className = 'alertTitle';
  alertTitle.textContent = title;

  const alertText = crel('div');
  alertText.className = 'alertText';
  alertText.textContent = text;

  const confirmButtons = crel('div');
  confirmButtons.className = 'confirmButtons';

  const yesButton = crel('div');
  yesButton.className = 'okAlertButton';
  yesButton.textContent = 'Yes';
  yesButton.addEventListener('click', () => {
    callBack(args);
    hideView(backView);
  });

  const noButton = crel('div');
  noButton.className = 'okAlertButton';
  noButton.textContent = 'No';
  noButton.addEventListener('click', () => {
    hideView(backView);
  });

  const okAlertButton = crel('div');
  okAlertButton.className = 'okAlertButton';
  okAlertButton.textContent = 'YES';
  okAlertButton.addEventListener('click', () => {
    callBack(args);
    hideView(backView);
  });

  doc(confirmButtons, yesButton);
  doc(confirmButtons, noButton);

  doc(alertPanel, alertTitle);
  doc(alertPanel, alertText);
  doc(alertPanel, confirmButtons);
  doc(backView, alertPanel);
  opac(backView);
}

function gat(element, attribute) {
  return element.getAttribute(attribute);
}

function sat(element, attribute, value) {
  element.setAttribute(attribute, value);
}

export {
  gel,
  gelc,
  crel,
  doc,
  appAlert,
  appConfirm,
  opac,
  trans,
  gat,
  sat,
};
