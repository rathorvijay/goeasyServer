import RenderStepCategory from "../AddCategory/RenderStepCategory"

export default function AddCategory() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Category
          </h1>
          <div className="flex-1">
            <RenderStepCategory />
          </div>
        </div>
        {/* Course Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Category Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
            <li>Set the Category Price option or make it free.</li>
            <li>Standard size for the Category thumbnail is 1024x576.</li>
            <li>Make Announcements to notify any important</li>
          </ul>
        </div>
      </div>
    </>
  )
}