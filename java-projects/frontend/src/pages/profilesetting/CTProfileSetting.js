/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const CTPSetting = () => (
<>
        <main class="col-md-9">
            <div class="card">
                <div class="card-body">
                    <form class="row">
                        <div class="col-md-9">
                            <div class="form-row">
                                <div class="col form-group">
                                    <label>Tên</label>
                                    <input type="text" class="form-control" value="Trần Minh Luân" />
                                </div>
                                <div class="col form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" value="luancui281103@gmail.com" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Quốc tịch</label>
                                    <select id="inputState" class="form-control">
                                        <option> Chọn...</option>
                                        <option>Uzbekistan</option>
                                        <option>Russia</option>
                                        <option selected="">United States</option>
                                        <option>India</option>
                                        <option>Việt Nam</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Thành phố</label>
                                    <input type="text" class="form-control" value="Hồ Chí Minh" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Mã Zip</label>
                                    <input type="text" class="form-control" value="70000" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label>Điẹn thoại</label>
                                    <input type="text" class="form-control" value="0394582058" />
                                </div>
                            </div>

                            <button class="btn btn-primary">Lưu</button>
                            <button class="btn btn-light">Đổi mật khẩu</button>

                            </div>
                                <div class="col-md">
                                    <img src="images/avatars/avatar1.jpg" class="img-md rounded-circle border" />
                                </div>
                            </form>
                            </div>
                            </div>

                            </main>
      
                        </>
                        );
                        export default CTPSetting