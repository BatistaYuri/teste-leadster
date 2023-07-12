export function startAnimation(document: Document) {
  const cards = document.getElementsByClassName("animation");
  Array.from(cards).forEach((card: Element) => {
    const posicoes = card.getBoundingClientRect();
    const inicio = posicoes.top;
    const fim = posicoes.bottom;

    if (
      inicio >= 0 &&
      fim <= window.innerHeight &&
      !card.className.includes("animation-init")
    ) {
      card.className = `${card.className} animation-init`;
    }
  });
}
