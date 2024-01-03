import React, {useState} from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import styles from '../styles/styles';

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(2)}>
            <span className="text-lg font-medium text-gray-900">
              Chính sách hoàn trả của bạn là gì?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Nếu bạn không hài lòng với giao dịch mua hàng của mình, chúng tôi chấp nhận trả lại
                trong vòng 30 ngày kể từ ngày giao hàng. Để bắt đầu trả lại hàng, vui lòng gửi email
                cho chúng tôi theo địa chỉ c2cshop@gmail.com kèm theo số đơn đặt hàng của bạn và
                giải thích ngắn gọn về lý do bạn trả lại hàng.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(3)}>
            <span className="text-lg font-medium text-gray-900">
              Làm cách nào để theo dõi đơn hàng của tôi?
            </span>
            {activeTab === 3 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 3 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Bạn có thể theo dõi đơn hàng của mình bằng cách nhấp vào liên kết theo dõi trong
                email xác nhận giao hàng hoặc bằng cách đăng nhập vào tài khoản của bạn trên trang
                web của chúng tôi và xem chi tiết đơn hàng.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(4)}>
            <span className="text-lg font-medium text-gray-900">
              Làm cách nào để liên hệ với bộ phận hỗ trợ khách hàng?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Bạn có thể liên hệ với nhóm hỗ trợ khách hàng của chúng tôi bằng cách gửi email cho
                chúng tôi theo địa chỉ c2cshop@gmail.com hoặc gọi cho chúng tôi theo số (555)
                123-4567 trong khoảng thời gian từ 9 giờ sáng đến 5 giờ chiều theo giờ EST, từ Thứ
                Hai đến Thứ Sáu.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(5)}>
            <span className="text-lg font-medium text-gray-900">
              Tôi có thể thay đổi hoặc hủy đơn hàng của mình không?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Rất tiếc, khi đơn hàng đã được đặt, chúng tôi không thể thực hiện thay đổi hoặc hủy
                bỏ. Nếu bạn không còn muốn các mặt hàng bạn đã đặt nữa, bạn có thể trả lại chúng để
                được hoàn tiền trong vòng 30 ngày kể từ ngày giao hàng.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(6)}>
            <span className="text-lg font-medium text-gray-900">
              Các shop có hỗ trợ đặt hàng từ nước ngoài không?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Hiện tại, chúng tôi chỉ cung cấp dịch vụ vận chuyển trong phạm vi Việt Nam.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button className="flex items-center justify-between w-full" onClick={() => toggleTab(7)}>
            <span className="text-lg font-medium text-gray-900">
              Phương thức thanh toán nào được chấp nhận?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Chúng tôi chấp nhận thanh toán bằng thẻ visa, mastercard, phương thức thanh toán
                paypal, chúng tôi cũng có hệ thống giao hàng tận nơi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
