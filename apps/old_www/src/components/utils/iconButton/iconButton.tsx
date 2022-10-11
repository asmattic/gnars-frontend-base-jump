import clsx from "clsx"
import { ButtonHTMLAttributes, FC, useMemo } from "react"
import Svg from "react-inlinesvg"
import { BaseButton } from "../baseButton/baseButton"

type IIconType = "bids" | "book" | "people" | "play" | "tick"

const Icon = styled(Svg)`
  width: 20px;
  max-height: 17px;
  max-width: 20px;
`

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon: IIconType
  design: "transparent" | "primary"
}

export const IconButton: FC<IIconButtonProps> = ({
  text,
  icon,
  design,
  ...props
}) => {
  const iconData = useMemo(() => {
    switch (icon) {
      case "bids":
        return "/images/bids.svg"
      case "book":
        return "/images/book.svg"
      case "people":
        return "/images/people.svg"
      case "play":
        return "/images/play.svg"
      case "tick":
        return "/images/tick.svg"
    }
  }, [icon])

  return (
    <BaseButton
      className={clsx(
        design === "primary" ? "bg-primary" : "border border-borderColor",
        "text-primaryText hover:bg-hoverLight w-full lg:w-auto"
      )}
      {...props}
    >
      <div className="flex flex-row items-center gap-1 max-w-20px">
        <Icon
          className={clsx(
            design === "transparent" && "opacity-50 dark:text-white"
          )}
          src={iconData}
        />
        <div
          className={clsx(
            "flex font-bold",
            design === "transparent" && "dark:text-white"
          )}
        >
          {text}
        </div>
      </div>
    </BaseButton>
  )
}
