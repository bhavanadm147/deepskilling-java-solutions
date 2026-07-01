import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAAPatternTest {

    private int number;

    // Setup Method
    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @Test
    public void testAddition() {

        // Arrange
        int a = number;
        int b = 20;

        // Act
        int result = a + b;

        // Assert
        assertEquals(30, result);
    }

    // Teardown Method
    @After
    public void tearDown() {
        System.out.println("Teardown executed");
    }
}