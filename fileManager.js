const fs = require("fs");

const fileName = "test.txt";

// ASYNCHRONOUS CREATE
fs.writeFile(fileName, "This file was created asynchronously.", (err) => {
    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("1. File created successfully.");

    // ASYNCHRONOUS READ
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("2. File content:");
        console.log(data);

        // ASYNCHRONOUS UPDATE
        fs.appendFile(
            fileName,
            "\nThis line was added asynchronously.",
            (err) => {
                if (err) {
                    console.log("Error updating file:", err);
                    return;
                }

                console.log("3. File updated successfully.");

                // READ UPDATED FILE
                fs.readFile(fileName, "utf8", (err, updatedData) => {
                    if (err) {
                        console.log("Error reading updated file:", err);
                        return;
                    }

                    console.log("4. Updated content:");
                    console.log(updatedData);

                    // ASYNCHRONOUS DELETE
                    fs.unlink(fileName, (err) => {
                        if (err) {
                            console.log("Error deleting file:", err);
                            return;
                        }

                        console.log("5. File deleted successfully.");
                    });
                });
            }
        );
    });
});

console.log("6. File operations started...");