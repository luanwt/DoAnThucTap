-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2023 at 06:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webbanhang`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `is_home` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `is_home`, `name`) VALUES
(1, 1, 'ThoiTrangNam'),
(2, 0, 'Thời trang nữ'),
(3, 1, 'Thiết bị điện tử'),
(4, 1, 'Thực phẩm'),
(5, 1, 'Đồ gia dụng'),
(6, 1, 'Dụng cụ ');

-- --------------------------------------------------------

--
-- Table structure for table `feed_back`
--

CREATE TABLE `feed_back` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `subject_name` varchar(255) DEFAULT NULL,
  `update_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `feed_back`
--

INSERT INTO `feed_back` (`id`, `created_at`, `email`, `firstname`, `lastname`, `note`, `phone_number`, `status`, `subject_name`, `update_at`) VALUES
(1, '2023-08-20 07:00:00.000000', 'luanwt281103@gmail.com', 'Tran', 'Luan', 'bad', '2133123', 21321, 'Lau thai', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` bigint(20) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `thumbnail`, `product_id`) VALUES
(2, 'galery1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
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

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `address`, `email`, `fullname`, `note`, `order_data`, `phone_number`, `status`, `total_money`, `user_id`) VALUES
(3, '44/109 Tan Chanh Hiep Quan 12', 'luancui281103@gmail.com', 'Tran Minh Luan', '1', '1970-01-01 07:00:00.000000', '765626651', 1, 3600000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
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
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `number` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `thumbnail1` varchar(255) DEFAULT NULL,
  `thumbnail2` varchar(255) DEFAULT NULL,
  `thumbnail3` varchar(255) DEFAULT NULL,
  `thumbnail4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `brand`, `created_at`, `deleted`, `description`, `discount`, `name`, `number`, `price`, `thumbnail`, `title`, `updated_at`, `category_id`, `thumbnail1`, `thumbnail2`, `thumbnail3`, `thumbnail4`) VALUES
(1, 'Omaichi', '2023-08-12 07:00:00.000000', 1, 'Ngon hay không tôi không biết', 160000, 'Lẩu thái tự sôi ', 2121110266, 149000, 'Lauthai.png', 'Lauthai.png', '2023-08-19 07:00:00.000000', 4, 'cuoi.png', 'cuoi.png', 'cuoi.png', 'cuoi.png'),
(2, 'Apple', '2023-08-10 07:00:00.000000', 1, 'Sang xin min', 12000000, 'MacBook12', 254242542, 19900000, 'mabook2.webp', 'mabook2.webp', '2023-09-05 07:00:00.000000', 3, 'cuoi.png', 'cuoi.png', 'cuoi.png', 'cuoi.png'),
(6, 'QDA', '2023-08-20 07:00:00.000000', 1, 'không thể dính', 123000, 'Chảo chống dính', 2121110244, 150000, 'chaocd.jpg', '1', '2023-08-20 07:00:00.000000', 5, 'cuoi.png', 'cuoi.png', 'cuoi.png', 'cuoi.png'),
(7, 'UKA', '2023-08-20 07:00:00.000000', 1, 'bao bền chịu nhiệt tốt', 350000, 'Bộ nồi inox xịn xò', 271424254, 400000, 'Noi.jpg', '1', '2023-08-20 07:00:00.000000', 5, NULL, NULL, NULL, NULL),
(8, 'CDM', '2023-08-20 07:00:00.000000', 1, 'Cao Cấp Mạ Vàng Chống Trượt Sang Trọng', 1250000, 'Đũa inox', 57124114, 1300000, 'dua.webp', 'Set 5 Đôi Đũa Inox Ruyi Cao Cấp Mạ Vàng Chống Trượt Sang Trọng', '2023-08-20 07:00:00.000000', 5, 'cuoi.png', 'cuoi.png', 'cuoi.png', 'cuoi.png'),
(9, 'DLC', '2023-08-20 07:00:00.000000', 1, 'Không bén không lấy tiền', 349000, 'Dao Nhật ', 10102441, 370000, 'dao.webp', 'Dao Nhật KAI - Dao Santoku Seki Magoroku Wakatake - 16.5cm', '2023-08-20 07:00:00.000000', 5, NULL, NULL, NULL, NULL),
(10, 'HotHotHot', '2023-08-04 07:00:00.000000', 1, 'Cay xé lưỡi', 360000, 'Lau Trung Khanh', 100241, 40000, 'Lautrungkhanh.jpg', 'Lẩu cay', '2023-08-20 07:00:00.000000', 4, NULL, NULL, NULL, NULL),
(11, 'Omaichi', '2023-08-20 07:00:00.000000', 1, 'bao ngon', 135000, 'Lẩu bắp bò', 4141042, 145000, 'Laubapbo.jpg', 'thơm ngon khó cưỡng', '2023-08-20 07:00:00.000000', 4, NULL, NULL, NULL, NULL),
(12, 'GoViet', '2023-08-04 07:00:00.000000', 1, 'dẻo thơm như cơm mẹ nấu', 60000, 'Cơm tự sôi', 1404424, 90000, 'comtusoi.webp', 'dẻo thơm như cơm mẹ nấu', NULL, 4, NULL, NULL, NULL, NULL),
(13, 'Apple', '2023-08-20 07:00:00.000000', 1, 'đắt', 30000000, 'Iphone 15', 14141401, 32000000, 'IP15.jpg', 'chát', '2023-08-20 07:00:00.000000', 3, NULL, NULL, NULL, NULL),
(14, ' Paradox', '2023-08-20 07:00:00.000000', 1, 'chiến các tự game nặng thoải mái', 18000000, 'Laptop Asus Gaming Rog Strix G15', 2124510, 19900000, '4h43.webp', 'Bảo hành 24 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất.', '2023-08-20 07:00:00.000000', 3, NULL, NULL, NULL, NULL),
(15, ' Paradox', '2023-08-20 07:00:00.000000', 1, '1', 28000000, 'Laptop Asus TUF Gaming A15 ', 141010423, 30000000, 'text_d_i_1__13.png', 'chiến tốt valo,LMTH,Genshin,..', '2023-08-20 07:00:00.000000', 3, NULL, NULL, NULL, NULL),
(16, ' Paradox', '2023-08-20 07:00:00.000000', 1, '1', 213000, 'Áo thun Paradox', 1121012, 300000, '2.webp', '1', '2023-08-31 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(18, 'PLA', '2023-08-12 07:00:00.000000', 1, '1', 0, 'quan jean ngắn', 210121101, 150000, '3.jpg', '1', '2023-08-20 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(19, 'LPL', '2023-08-17 07:00:00.000000', 1, '123', 160000, 'Áo thun Nam', 10101214, 200000, 'Aothunnam.jpg', '1', '2023-08-20 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(20, 'EQS', '2023-08-20 07:00:00.000000', 1, 'thoáng mát', 350000, 'Áo thun MARVEL Craft', 1024244, 400000, 'aomarval.webp', '1', '2023-08-20 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(21, '1321', '2023-08-09 07:00:00.000000', 1, '213', 213, '324', 21321, 21321, '12321', '123', '2023-09-05 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(22, '21', '2023-08-01 07:00:00.000000', 123, '213', 213, '341', 213, 213, '213', '213', '2023-09-06 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(23, '213', '2023-08-16 07:00:00.000000', 123, '213', 213, '123', 213, 213, '213', '213', '2023-08-30 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(24, '213', '2023-07-31 07:00:00.000000', 213, '213', 213, '213', 21, 213, '21', '213', '2023-09-05 07:00:00.000000', 1, NULL, NULL, NULL, NULL),
(25, '213', '2023-08-08 07:00:00.000000', 21, '21', 21, '213', 213, 21, '21', '21', '2023-08-23 07:00:00.000000', 1, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'role1');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

CREATE TABLE `token` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`id`, `created_at`, `token`, `user_id`) VALUES
(2, '2023-08-10 07:00:00.000000', 'Token 1', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
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
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `address`, `created_at`, `deleted`, `email`, `fullname`, `password`, `phone_number`, `updated_at`, `role_id`) VALUES
(1, '44/109', '2023-08-03 07:00:00.000000', 1, 'luancui281103', 'TranMinhLuan', '162426', '765626651', '2023-08-22 07:00:00.000000', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feed_back`
--
ALTER TABLE `feed_back`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKoo2h8inluisbx700nbtwf2scg` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrws2q0si6oyd6il8gqe2aennc` (`order_id`),
  ADD KEY `FKb8bg2bkty0oksa3wiq5mp5qnc` (`product_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `feed_back`
--
ALTER TABLE `feed_back`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `token`
--
ALTER TABLE `token`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `FKoo2h8inluisbx700nbtwf2scg` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `FKb8bg2bkty0oksa3wiq5mp5qnc` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKrws2q0si6oyd6il8gqe2aennc` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);

--
-- Constraints for table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FKe32ek7ixanakfqsdaokm4q9y2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
