import React from "react";
import formImg from '../../components/Images/form.png'
import Image from "next/image";
const Comment = () => {
  const handleReview = () => {};
  return (
    <div className="bg-white">
      <h1 className="text-5xl font-semibold text-slate-600 py-5">Add Your Review</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl m-auto items-center">
        {/* <h1>hello </h1> */}
      <div>
        <Image src={formImg}/>
      </div>
      <div className="py-10 mx-4 lg:mx-0">
        <form onSubmit={handleReview}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-normal">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered text-start"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-normal">Title</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="address"
                className="input input-bordered text-start"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-normal">Designation</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Title"
                className="input input-bordered text-start"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-normal">Email</span>
              </label>
              <input type="file" className="file-input file-input-bordered file-input-md" />
            </div>
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text text-lg font-normal">Description</span>
            </label>
            <textarea
              name="message"
              className="textarea text-start"
              placeholder="Message"
            ></textarea>
          </div>
          <h2 className="text-start font-semibold text-sky-500 text-2xl mt-5">Provide Rating</h2>
          <div className="rating my-4 block text-start">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-success text-white font-semibold"
              type="submit"
              value="Reveiw Add"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Comment;
