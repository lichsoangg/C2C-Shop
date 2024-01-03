export function formatVND(price) {
  const formattedPrice = parseFloat(price).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return formattedPrice;
}
