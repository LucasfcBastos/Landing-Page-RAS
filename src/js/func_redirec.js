function redirecionarPara(text, type) {
  if (type === 1) {
    window.location.href = text;
  } else if (type === 2) {
    const urlWhats = `https://wa.me/${text}`;
    window.open(urlWhats, '_blank');
  } else {
    alert(text);
  }
}
