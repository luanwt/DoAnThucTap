/* eslint-disable jsx-a11y/alt-text */
import React from "react";
const CTPSetting = () => (
<>
        <main className="col-md-9">
            <div className="card">
                <div className="card-body">
                    <form className="row">
                        <div className="col-md-9">
                            <div className="form-row">
                                <div className="col form-group">
                                    <label>Tên</label>
                                    <input type="text" className="form-control" value="Trần Minh Luân" />
                                </div>
                                <div className="col form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" value="luancui281103@gmail.com" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Quốc tịch</label>
                                    <select id="inputState" className="form-control">
                                        <option> Chọn...</option>
                                        <option>Uzbekistan</option>
                                        <option>Russia</option>
                                        <option selected="">United States</option>
                                        <option>India</option>
                                        <option>Việt Nam</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Thành phố</label>
                                    <input type="text" className="form-control" value="Hồ Chí Minh" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Mã Zip</label>
                                    <input type="text" className="form-control" value="70000" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Điẹn thoại</label>
                                    <input type="text" className="form-control" value="0394582058" />
                                </div>
                            </div>

                            <button className="btn btn-primary">Lưu</button>
                            <button className="btn btn-light">Đổi mật khẩu</button>

                            </div>
                                <div className="col-md">
                                    <img src="images/avatars/avatar1.jpg" className="img-md rounded-circle border" />
                                </div>
                            </form>
                            </div>
                            </div>

                            </main>
      
                        </>
                        );
                        export default CTPSetting