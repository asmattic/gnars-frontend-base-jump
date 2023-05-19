import {
  Badge,
  Button,
  DarkMode,
  Heading,
  keyframes,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { FC } from "react"
import { FaInfoCircle } from "react-icons/fa"

interface BiddingAndSettlingModalProps {}

const pulsate = keyframes`
0%,
  20% {
    transform: translateX(0);
  }
  2%,
  6%,
  10%,
  14% {
    transform: translateX(-2px);
  }
  4%,
  8%,
  12% {
    transform: translateX(2px);
  }
  16% {
    transform: translateX(1px);
  }
  18% {
    transform: translateX(-1px);
  }
`

export const BiddingAndSettlingInfo: FC<
  BiddingAndSettlingModalProps
> = ({}) => {
  const { isOpen, onClose, getButtonProps } = useDisclosure()
  return (
    <Stack
      alignItems={"start"}
      direction={{ base: "column", sm: "row" }}
      w={"full"}
      spacing={{ base: 2, sm: 8 }}
    >
      <Button
        color={"chakra-body-text"}
        size={"xs"}
        leftIcon={<FaInfoCircle size={16} />}
        variant={"link"}
        {...getButtonProps()}
      >
        BIDDING AND SETTLING
      </Button>
      <Button
        animation={`${pulsate} 3s infinite`}
        as={"a"}
        target={"_blank"}
        color={"chakra-body-text"}
        href={"https://www.settle.wtf/"}
        size={"xs"}
        leftIcon={
          <Badge
            fontSize={"2xs"}
            borderRadius={"sm"}
            py={"1px"}
            px={"2px"}
            color={{ base: "chakra-body-bg", lg: "var(--gnar-bg-color)" }}
            bgColor={"chakra-body-text"}
          >
            NEW!
          </Badge>
        }
        variant={"link"}
      >
        PICK THE NEXT GNAR
      </Button>
      <DarkMode>
        <Modal
          scrollBehavior={"inside"}
          closeOnEsc
          closeOnOverlayClick
          size={"2xl"}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent
            mx={2}
            pb={4}
            color={"chakra-body-text"}
            bgColor={"chakra-body-bg"}
          >
            <ModalHeader textStyle={"h2"} textAlign={"center"}>
              Bidding and Settling
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack alignItems={"start"} spacing={10}>
                <VStack alignItems={"start"}>
                  <Heading fontSize={"4xl"}>Settlement</Heading>
                  <Text>
                    Anyone can settle an auction. When an auction ends, a
                    gas-only transaction is required to start the next auction
                    and mint the current Gnar to the winner’s wallet. As gas
                    prices fluctuate, the cost of settlement also fluctuates.
                    Cost of settlement for every Gnar ID ending in 6 is higher
                    as it consumes more gas. This is due to the transaction also
                    triggering the free Gnar mint: all Gnars ending in 7 are
                    sent to the treasury and held on behalf of the Nouns
                    Athletes.
                  </Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Heading fontSize={"4xl"}>Bids</Heading>
                  <Text>
                    Once an auction starts, everyone has 10 minutes to bid
                    (auction duration doubles every 1000 auctions from #627
                    onwards). Anyone can bid an amount at/above 0.011 ETH. If
                    your bid is outbid by someone else, the full amount of your
                    bid (minus gas spent to bid) is returned to you in the same
                    transaction as the new higher bid.
                  </Text>
                </VStack>
                <VStack alignItems={"start"}>
                  <Heading fontSize={"4xl"}>Bid Refunds</Heading>
                  <Text>
                    Unsuccessful bids are refunded in full. Refunds are sent via
                    an internal transaction included in the transaction of a new
                    higher bid. This means that refunds for unsuccessful bids
                    occur when a higher bid is received.
                  </Text>
                </VStack>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </DarkMode>
    </Stack>
  )
}
