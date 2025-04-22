import { X } from "lucide-react";
import { useDashboardEventStore } from "../hooks/useModalStore";

const GlobalModal = () => {
  const { isOpen, content, title, position, closeModal } =
    useDashboardEventStore();

  if (!isOpen) return null;

  let positionClasses = "";

  switch (position) {
    case "right":
      positionClasses = "justify-end items-center pr-4";
      break;
    case "top":
      positionClasses = "justify-center items-center";
      break;
    default:
      positionClasses = "justify-center items-center";
  }

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const isHtmlString = typeof content === "string";

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#2155A329] flex ${positionClasses}`}
      onClick={closeModal}
    >
      <div
        className="custom-scroll bg-white w-[584px] rounded-xl p-[30px] shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={handleContentClick}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="text-[22px] text-color font-bold">{title}</p>
          <button
            onClick={closeModal}
            className="w-11 h-11 cursor-pointer flex items-center justify-center bg-[#F4F9FD] rounded-[14px]"
          >
            <X color="#0A1629" />
          </button>
        </div>
        {isHtmlString ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam
        nam fugiat numquam quas. Recusandae quas quasi repellat fugiat veniam
        possimus, qui veritatis ducimus ipsum odit deserunt asperiores voluptas
        quidem earum velit quae perferendis! Commodi a nihil odit qui tenetur
        sapiente animi, ab maxime, facilis officia magnam minima veniam suscipit
        deserunt at fugiat reprehenderit, quam quibusdam. Maiores quia ex
        nostrum. Adipisci ad debitis est, porro ut laborum dignissimos doloribus
        reiciendis, sit eveniet omnis blanditiis nobis quibusdam. Alias
        voluptatem at labore ullam aliquid magni quidem voluptas accusamus ut,
        tempora modi excepturi ipsam. Sed, similique sapiente consequuntur et ea
        dolor. A perspiciatis harum fugiat odio quaerat laboriosam accusamus
        aliquid pariatur nulla magni. Delectus temporibus reprehenderit a,
        tempora repellendus animi error porro consectetur dicta possimus
        sapiente exercitationem assumenda mollitia hic fugit est quod similique
        quam optio autem excepturi expedita enim ducimus illo. In quo officiis
        atque a tenetur eveniet sit corporis ipsum expedita aliquam unde
        consectetur ut, modi praesentium exercitationem suscipit cumque placeat
        accusamus illo dolorum, dicta perferendis! Libero ratione repudiandae
        ullam fugiat eligendi voluptas nulla sunt odit accusantium quam,
        incidunt aperiam maiores nisi optio ab expedita quasi impedit dolorem,
        enim explicabo. Excepturi odit, expedita doloribus veniam corrupti aut
        qui numquam laborum rem ut aspernatur amet tempora, aliquam perferendis
        nihil reprehenderit? Molestias, nostrum itaque velit laborum illo et
        asperiores dolorem, aliquam debitis autem consequuntur sequi dolor
        fugiat eaque cupiditate ullam incidunt aliquid voluptates, consequatur
        voluptatibus quae repellat alias. Provident fugit deserunt dolorem ex in
        quod molestias doloremque, aperiam expedita ab cumque consequuntur.
        Exercitationem perferendis beatae quidem veniam sint architecto quisquam
        at praesentium fuga asperiores fugiat ea repellendus, odio dignissimos.
        Laudantium rem veritatis tempora doloribus assumenda veniam, cupiditate
        ullam enim a deserunt quaerat quae maxime fugiat quisquam vel distinctio
        optio neque non laborum. Nam possimus modi id temporibus atque
        reprehenderit, necessitatibus dolorem blanditiis doloremque?
      </div>
    </div>
  );
};

export default GlobalModal;
