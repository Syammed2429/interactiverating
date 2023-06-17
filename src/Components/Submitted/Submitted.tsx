import { Box, Card, CardBody, CardHeader, Center, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react";
import ThankYou from '../../assets/illustration-thank-you.svg'
interface SubmittedInterface {
    number?: number | null;
    isSubmitted?: boolean;
}

export const Submitted = (props: SubmittedInterface) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 1, sm: 1 }}
            >
                <Center>
                    <Box
                        p="8"
                        w={{ base: '100%', md: '55%', lg: '50%' }}
                        color="white"

                    >


                        <HStack direction={['column']}>
                            <Card
                                bgColor='#1f2630'
                                rounded='2xl'
                            >
                                <CardHeader>
                                    <Center>

                                        <Image src={ThankYou} />
                                    </Center>
                                    <Center
                                        mt={8}
                                        mb='-4'
                                    >

                                        <Box
                                            w={{ base: '90%', md: '65%', lg: '65%' }}
                                            bg='#252D38'
                                            borderRadius='3xl'

                                        >
                                            <Text
                                                color='#FD7612'
                                                py='2'
                                                fontSize='md'
                                            >You selected {props.number} out of 5</Text>
                                        </Box>
                                    </Center>
                                </CardHeader>
                                <CardBody>
                                    <Text>Thank you!</Text>
                                    <Text
                                        fontSize='sm'
                                        opacity='.3'
                                        my={3}
                                    >We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</Text>
                                </CardBody>
                            </Card>
                        </HStack>
                    </Box>
                </Center>

            </SimpleGrid>

        </>
    );
}