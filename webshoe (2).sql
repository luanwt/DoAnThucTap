-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 05, 2024 lúc 02:26 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webshoe`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `user_id`) VALUES
(2, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_item`
--

CREATE TABLE `cart_item` (
  `id` bigint(20) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `quality` int(11) NOT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cart_item`
--

INSERT INTO `cart_item` (`id`, `product_id`, `quality`, `cart_id`, `image`, `name`, `price`) VALUES
(167, 4, 1, 2, 'Jordanlow3.webp', 'Jordan_Low4', 680000),
(168, 2, 1, 2, 'JordanLow1.jpg', 'Jordan_Low2', 450000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `is_home`, `name`, `parent_id`) VALUES
(1, 0, 'Jordan', NULL),
(2, 1, 'Jordan_Low', 1),
(3, 1, 'Jordan_Mid', 1),
(4, 1, 'Jordan_High', 1),
(5, 0, 'Nike', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `feed_back`
--

CREATE TABLE `feed_back` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `update_at` datetime(6) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `feed_back`
--

INSERT INTO `feed_back` (`id`, `created_at`, `email`, `note`, `phone_number`, `status`, `update_at`, `product_id`, `fullname`, `content`) VALUES
(1, NULL, 'luancui281103@gmail.com', 'note', '326106400', 1, NULL, 4, 'Tran Minh Luan', 'alo alo'),
(2, '2024-06-05 19:23:42.000000', 'luancui281103@gmail.com', 'note', '326106400', 1, NULL, 4, 'Tran Minh Luan', 'giày dỏm lắm mn ơi'),
(3, '2024-06-05 19:24:58.000000', 'luancui281103@gmail.com', 'note', '326106400', 1, NULL, 4, 'Tran Minh Luan', 'Mua tốn tiền thôi:))');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_data` datetime(6) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `total_money` int(11) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_detail`
--

CREATE TABLE `order_detail` (
  `id` bigint(20) NOT NULL,
  `num` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total_money` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `quality` int(11) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `brand`, `created_at`, `deleted`, `description`, `discount`, `image`, `name`, `price`, `quality`, `size`, `title`, `updated_at`, `category_id`) VALUES
(1, 'Jordan', '2024-05-01 13:32:56.000000', 0, 'Jordan_Low1', 430000, 'jordanlow.jpeg', 'Jordan_Low1', 450000, 654, '35,36,37,38,39,40,41,42,43', '632', '2024-05-03 07:00:00.000000', 2),
(2, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan Low second', 450000, 'JordanLow1.jpg', 'Jordan_Low2', 560000, 881, '35,36,37,38,39,40,41,42,43', '36', '2024-05-03 07:00:00.000000', 2),
(3, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_Low3', 780000, 'jordanlow2.jpg', 'Jordan_Low3', 860000, 2312312, '35,36,37,38,39,40,41,42,43', '344', '2024-05-03 07:00:00.000000', 2),
(4, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_Low4', 680000, 'Jordanlow3.webp', 'Jordan_Low4', 1200000, 312312, '35,36,37,38,39,40,41,42,43', '131', '2024-05-03 07:00:00.000000', 2),
(5, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_Low5 ', 250000, 'jordanlow4.jpg', 'Jordan_Low5', 620000, 99999, '35,36,37,38,39,40,41,42,43', '12', '2024-05-03 07:00:00.000000', 2),
(6, 'Jordan', '2024-05-03 07:00:00.000000', 1, '2312', 12440000, 'Jordanlow5.jpg', 'Jordan_Low6', 20440000, 312, '35,36,37,38,39,40,41,42,43', '1235', '2024-05-03 07:00:00.000000', 2),
(7, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_LowGreen', 780000, 'jordanlowgreen.jpg', 'Jordan_LowGreen', 840000, 65241, '35,36,37,38,39,40,41,42,43', '196', '2024-05-03 07:00:00.000000', 2),
(8, '231', '2024-05-03 07:00:00.000000', 1, 'Jordan_Mid', 555000, 'jordanmid.jpeg', 'Jordan_Mid', 666000, 6565, '35,36,37,38,39,40,41,42,43', '651', '2024-05-03 07:00:00.000000', 3),
(9, 'Jordan', '2024-05-11 07:00:00.000000', 3, 'Jordan_Mid2', 695000, 'jordanmid2.jpg', 'Jordan_Mid2', 700000, 9665, '35,36,37,38,39,40,41,42,43', '12321', '2024-05-03 07:00:00.000000', 3),
(10, 'Jordan', '2024-05-03 07:00:00.000000', 2131, 'Jordan_Mid3', 888000, 'jordanmid3.jpg', 'Jordan_Mid3', 999000, 9898, '35,36,37,38,39,40,41,42,43', '1', '2024-05-03 07:00:00.000000', 3),
(11, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_High', 654000, 'jordanhigh.jpeg', 'Jordan_High', 656000, 6565, '35,36,37,38,39,40,41,42,43', '23145', '2024-05-03 07:00:00.000000', 4),
(12, 'Jordan', '2024-05-03 07:00:00.000000', 1, 'Jordan_High2', 420000, 'jordanhigh2.png', 'Jordan_High2', 450000, 4542, '35,36,37,38,39,40,41,42,43', '6988', '2024-05-03 07:00:00.000000', 4),
(13, 'Jordan', '2024-05-03 07:00:00.000000', 3311, 'Jordan_High3', 865000, 'jordanhigh3.jpg', 'Jordan_High3', 887000, 8786, '35,36,37,38,39,40,41,42,43', '23566', '2024-05-03 07:00:00.000000', 4),
(14, 'Jordan', '2024-05-03 07:00:00.000000', 36, 'Jordan_High4', 5500000, 'high4.jpg', 'Jordan_High4', 6000000, 45112, '35,36,37,38,39,40,41,42,43', '36225', '2024-05-03 07:00:00.000000', 4),
(15, 'Jordan', '2024-05-11 07:00:00.000000', 696, 'Jordan_High5', 9900000, 'high5.jpg', 'Jordan_High5', 10000000, 36552, '35,36,37,38,39,40,41,42,43', '89885', NULL, 4),
(16, NULL, NULL, 6955, 'Jordan_High6', 5400000, 'high6.webp', 'Jordan_High6', 5500000, 2222, '35,36,37,38,39,40,41,42,43', '9888', '2024-05-03 07:00:00.000000', 4),
(17, 'Jordan', '2024-05-03 07:00:00.000000', 3, 'Jordan_High8', 5800000, 'HIGH8.jpg', 'Jordan_High8', 6000000, 998522, '35,36,37,38,39,40,41,42,43', '36', '2024-05-03 07:00:00.000000', 4);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `token`
--

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `address`, `created_at`, `deleted`, `email`, `fullname`, `password`, `phone_number`, `updated_at`, `role_id`) VALUES
(1, '44/109 Tân Chánh Hiệp Q12', '2024-05-03 07:00:00.000000', 1, 'luancui281103@gmail.com', 'Tran Minh Luan', '162426', '326106400', '2024-05-03 07:00:00.000000', 1),
(2, '44/109 Q12 TP HCM', '2024-05-03 07:00:00.000000', 1, 'luan1123@gmail.com', 'Tran Minh Luan', '162426', '326106400', '2024-05-03 07:00:00.000000', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_9emlp6m95v5er2bcqkjsw48he` (`user_id`);

--
-- Chỉ mục cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `feed_back`
--
ALTER TABLE `feed_back`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjig4jdi843wu303uvyeqt0ph` (`product_id`);

--
-- Chỉ mục cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKoo2h8inluisbx700nbtwf2scg` (`product_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`);

--
-- Chỉ mục cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrws2q0si6oyd6il8gqe2aennc` (`order_id`),
  ADD KEY `FKb8bg2bkty0oksa3wiq5mp5qnc` (`product_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `feed_back`
--
ALTER TABLE `feed_back`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `token`
--
ALTER TABLE `token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`);

--
-- Các ràng buộc cho bảng `feed_back`
--
ALTER TABLE `feed_back`
  ADD CONSTRAINT `FKjig4jdi843wu303uvyeqt0ph` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `FKoo2h8inluisbx700nbtwf2scg` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `FKb8bg2bkty0oksa3wiq5mp5qnc` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKrws2q0si6oyd6il8gqe2aennc` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Các ràng buộc cho bảng `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
