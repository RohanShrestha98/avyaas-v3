import { useState } from "react"
import logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom"

export default function Sidebar() {
  const [active, setActive] = useState(window.location.pathname)
  const navigate = useNavigate()
  const sidebar = [
    {
      id: 1,
      name: "Dashboard",
      icon: "",
      link: "/"
    },
    {
      id: 2,
      name: "Users",
      icon: "",
      link: "/users"
    },
    {
      id: 3,
      name: "Instructors",
      icon: "",
      link: "/instructors"
    },
    {
      id: 4,
      name: "Categories",
      icon: "",
      link: "/categories"
    },
    {
      id: 5,
      name: "Courses",
      icon: "",
      link: "/courses"
    },
    {
      id: 6,
      name: "Subjects",
      icon: "",
      link: "/subjects"
    },
    {
      id: 7,
      name: "Units",
      icon: "",
      link: "/units"
    },
    {
      id: 8,
      name: "Chapters",
      icon: "",
      link: "/chapters"
    },
    {
      id: 9,
      name: "Quizzes",
      icon: "",
      link: "/quizzes"
    },
    {
      id: 10,
      name: "Question Bank",
      icon: "",
      link: "/question-bank"
    },
    {
      id: 11,
      name: "Questions",
      icon: "",
      link: "/questions"
    },
    {
      id: 12,
      name: "Subscriptions",
      icon: "",
      link: "/subscriptions"
    },
    {
      id: 13,
      name: "Referral Codes",
      icon: "",
      link: "/referral-codes"
    },
    {
      id: 14,
      name: "Payment Logs",
      icon: "",
      link: "/payment-logs"
    },
    {
      id: 15,
      name: "Notifications",
      icon: "",
      link: "/notifications"
    },
    {
      id: 16,
      name: "Feedbacks",
      icon: "",
      link: "/feedbacks"
    }
  ]

  const handleActive = (item) => {
    setActive(item?.link)
    navigate(`${item?.link}`)
  }

  return (
    <div className="border h-screen w-full flex flex-col gap-4 p-4">
      <img src={logo} alt="" className="w-[120px]" />
      <div className="flex flex-col gap-2">
        {
          sidebar?.map((item) => {
            return (<div key={item?.id} onClick={() => handleActive(item)} className={`flex font-medium items-center  ${item?.link === active ? "text-blue-500 cursor-default" : "text-gray-500 cursor-pointer"}`}>
              <div>{item?.icon}</div>
              <div>{item?.name}</div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
