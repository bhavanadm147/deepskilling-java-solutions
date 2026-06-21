class Logger {

    private static Logger instance = new Logger();

    private Logger() {
    }

    public static Logger getInstance() {
        return instance;
    }

    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}

public class Main {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First Message");
        logger2.log("Second Message");

        if (logger1 == logger2) {
            System.out.println("Only one Logger instance is created.");
        } else {
            System.out.println("Different Logger instances are created.");
        }
    }
}