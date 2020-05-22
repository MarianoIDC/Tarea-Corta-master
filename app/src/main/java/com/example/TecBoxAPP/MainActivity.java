package com.example.TecBoxAPP;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    EditText packageId;
    Button delivered;
    Button failed;
    Button returned;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        packageId = findViewById(R.id.packid);
        delivered = findViewById(R.id.delivered);
        failed = findViewById(R.id.failed);
        returned = findViewById(R.id.returned);

    }
}
