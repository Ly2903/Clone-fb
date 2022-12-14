import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import iconFB from "../../../../assets/images/iconFB.ico";
import avt from "../../../../assets/images/avt.jpg";
const StoryPreview = () => {
  return (
    <div>
      <div>
        Navbar story
        <div className="flex">
          <button className=" mr-3 h-9 w-9 !bg-secondary-button-bg hover:!bg-hover-bg right-4 top-4 absolute rounded-full">
            <FontAwesomeIcon
              icon={faClose}
              className="text-secondary-text text-xl"
            />
            <img src={iconFB} alt="Icon Facebook" />
          </button>
        </div>
        <div className="border-[1px] border-b-color-border"></div>
        <div>
          <div>
            <h2>Tin</h2>
            <ul className="flex text-primary-color">
              <li>Kho lưu trữ</li>
              <li>Cài đặt</li>
            </ul>
          </div>
          <div>
            <div>
              <span>Tin của bạn</span>
              <div>
                <div className="bg-hover-bg p-4">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primary-color"
                  />
                </div>
                <div className="ml-3">
                  <p>Tạo tin</p>
                  <p>Bạn có thể chia sẻ ảnh hoặc viết gì đó.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>Tất cả tin</span>
          <ul>
            <li className="group mb-1 px-2 hover:cursor-pointer relative rounded-md py-2 px-2 flex items-center font-medium group-hover:bg-comment-bg">
              <img src={avt} alt="" className="rounded-full w-6 h-6" />

              <div className="flex flex-col ml-3">
                <span className="ml-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Lê Mậu Anh Đức
                </span>
                <span>2 giờ</span>
              </div>
            </li>
            <li className="group mb-1 px-2 hover:cursor-pointer relative rounded-md py-2 px-2 flex items-center font-medium group-hover:bg-comment-bg">
              <img src={avt} alt="" className="rounded-full w-6 h-6" />

              <div className="flex flex-col ml-3">
                <span className="ml-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Lê Mậu Anh Đức
                </span>
                <span>2 giờ</span>
              </div>
            </li>
            <li className="group mb-1 px-2 hover:cursor-pointer relative rounded-md py-2 px-2 flex items-center font-medium group-hover:bg-comment-bg">
              <img src={avt} alt="" className="rounded-full w-6 h-6" />

              <div className="flex flex-col ml-3">
                <span className="ml-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
                  Lê Mậu Anh Đức
                </span>
                <span>2 giờ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>Story content</div>
    </div>
  );
};

export default StoryPreview;
