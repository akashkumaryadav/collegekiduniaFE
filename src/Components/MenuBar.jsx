import { Link } from "@reach/router";
import React from "react";
import {
  Checkbox,
  Icon,
  Image,
  Menu,
  Radio,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const SidebarExampleSidebar = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="grid grid-cols-1">
      <div>
        <Sidebar.Pushable as={Segment} className="h-screen">
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            onHide={() => setVisible(false)}
            visible={visible}
            width="wide"
          >
            <ul className="flex flex-col space-y-3 h-full bg-gray-200 w-full">
              <li className="text-3xl flex flex-wrap mx-auto justify-center align-middle items-center">
                <img
                  className="w-14 rounded-full my-2 mx-2 "
                  src="https://avatars.githubusercontent.com/u/49105309?s=400&u=17e3a305920b300802a671a1b3dd9e149996f710&v=4"
                  alt="avatar"
                />
                <h1>Welcome User </h1>
              </li>
              <li className="text-2xl border-b border-gray-100">
                <Link to="/">Home</Link>
              </li>
              <li className="text-2xl">
                <Link to="/">Signin</Link>
              </li>
            </ul>
          </Sidebar>

          <Sidebar.Pusher
            as="div"
            className="overflow-x-visible"
            dimmed={visible}
          >
            <div className="flex container mx-auto flex-wrap h-20  justify-between items-center align-middle w-full p-5">
              <Radio
                checked={visible}
                toggle
                label={{ children: <code className="text-lg">OpenMenu</code> }}
                onChange={() => setVisible(!visible)}
              />
              <img
                className="object-cover h-16 rounded-xl border border-black"
                src="https://avatars.githubusercontent.com/u/49105309?s=460&u=17e3a305920b300802a671a1b3dd9e149996f710&v=4"
              />
              <div>
                <Link to="/">
                  <Icon name="arrow left" size="big"></Icon>
                </Link>
              </div>
            </div>
            <hr className="w-full m-4" />
            <div className=" overflow-x-visible">{children}</div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </div>
  );
};

export default SidebarExampleSidebar;
