import { Card, CardBody, Center, Heading, SimpleGrid, Text, Stack, Box, CardFooter, Button, CardHeader, Image } from "@chakra-ui/react"
import { FC, useState } from "react"
import { Submitted } from "../Submitted/Submitted";
import Star from '../../assets/icon-star.svg'

export const Rating: FC = () => {

    const numbers: number[] = [1, 2, 3, 4, 5];
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const handleRating = (num: number) => {
        if (selectedNumber === num)
            setSelectedNumber(null)
        else {
            setSelectedNumber(num)

        }
    }

    const handleSubmit = () => {
        setIsSubmitted(true)
    }

    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 1, sm: 1 }}>
                {isSubmitted ?
                    (
                        <Submitted number={selectedNumber} isSubmitted={isSubmitted} />)
                    :


                    <Center>

                        <Box p="8"
                            w={{ base: '95%', md: '55%', lg: '50%' }}
                            textAlign="start"

                        >
                            <Card
                                bgColor='#1f2630'
                                rounded='2xl'
                            >
                                <CardHeader>
                                    <Box
                                        w='30px' h='30px'
                                        borderRadius='50'
                                        bg='#252D38'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                    >

                                        <Image src={Star} />
                                    </Box>
                                </CardHeader>

                                <Stack>
                                    <CardBody>
                                        <Heading color='white'
                                            mb={5}
                                        >
                                            How did we do?
                                        </Heading>
                                        <Text
                                            color='#757B85'
                                            fontSize='md'

                                        >
                                            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                                        </Text>
                                        <Box
                                            display="flex" justifyContent='space-between' alignItems='center' alignContent='center'>
                                            {numbers.map((num, i) => (

                                                <Box key={i}
                                                    mt={5}
                                                    bg={selectedNumber === num ? 'gray' : '#262f38'}
                                                    color={selectedNumber === num ? 'white' : '#757B85'}
                                                    onClick={() => handleRating(num)}
                                                    _hover={{ bg: '#FD7612', cursor: 'pointer', color: 'white' }}
                                                    _active={{ bg: 'gray' }}
                                                    w='50px' h='50px'
                                                    rounded='50%' display='flex'
                                                    alignContent='center'
                                                    alignItems='center'
                                                    justifyContent='center'

                                                >{num}</Box>
                                            ))}
                                        </Box>
                                    </CardBody>
                                    <CardFooter
                                    >
                                        <Box
                                            w='100%'

                                        >
                                            <Button
                                                w='100%'
                                                isDisabled={!selectedNumber}
                                                onClick={handleSubmit}
                                                bg='#FD7612' _hover={{ color: '#FD7612', bg: 'white' }} rounded='3xl' py={6}>SUBMIT</Button>
                                        </Box>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        </Box>
                    </Center>
                }


            </SimpleGrid>
        </>
    )
}