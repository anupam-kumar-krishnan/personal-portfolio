import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Gujarat",
      image:
        "https://worldarchitecture.org/cdnimgfiles/extuploadc/amitdavereuters.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Rajasthan",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1742171011440",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "New Delhi",
      image:
        "https://www.wendywutours.com/resource/upload/889/banner-red-fort.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Uttar Pradesh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Bihar",
      image:
        "https://media1.thrillophilia.com/filestore/cdb65g4upihlrgv02knq6jy3taho_14.%2080%20FEET%20BUDDHA%20STATUE_BODHGAYA.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Maharashtra",
      image:
        "https://images.unsplash.com/photo-1562979314-bee7453e911c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZHJhJTIwd29ybGklMjBzZWElMjBsaW5rfGVufDB8fDB8fHww",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Chennai",
      image:
        "https://media1.thrillophilia.com/filestore/h7qlmcbpidhg79113r98bdc6bh28_shutterstock_1447073330%20(1).jpg?w=400&dpr=2",
      className: "absolute top-24 left-[30%] rotate-[12deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-[30rem] w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Life is too short to argue, live it to the fullest.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-50 w-80 object-cover"
          />
          <h4 className="mt-4 text-center text-base font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h4>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
